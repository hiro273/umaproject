import React,{useState} from "react";
import axios from 'axios'

const aa = () => {
  const [body,setBody] = useState('')
  const [posts,setPosts] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    // postsdata();
    axios.post('/posts', {
      body: body
    }).then(response => {
      setPosts([...posts,response.data])
    })
    .catch(error => {
      console.log(error)
    });
    setBody(''); 
  }

  function handleChange(e) {
    setBody(e.target.value)
  }

  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Tweet something..</div>

                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <textarea
                              onChange={handleChange}
                              value={body}
                              className="form-control"
                              rows="5"
                              maxLength="140"
                              placeholder="Whats up?"
                              required
                            />
                          </div>
                          <input type="submit" value="Post" className="form-control" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Recent tweets</div>

                    <div className="card-body">
                      {posts.map(pos => (
                        <div key={pos.id} className="media">
                          <div className="media-left">
                            <img src={pos.user.avatar} className="media-object mr-2"/>
                          </div>
                          <div className="media-body">
                            <div className="user">
                              <a href={`/users/${pos.user.username}`} >
                                <b>{pos.user.username}</b>
                              </a>{''}
                              {/* - {pos.humanCreatedAt} */}
                            </div>
                            <p>{pos.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default aa;
