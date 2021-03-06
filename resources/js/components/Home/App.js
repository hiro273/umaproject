import React,{useState,useEffect} from "react";
import axios from 'axios'
import Echo from "laravel-echo";

const App = () => {
  const [body,setBody] = useState('')
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)

  // window.Echo.private('new-post').listen('PostCreated',e => {
  //   if (window.Laravel.user.following.includes(e.post.user_id)) {
  //     setPosts([e.post, ...posts])
  //   }
  //   console.log('hello');
  // })

  useEffect(() => {
    window.Echo.private('new-post').listen('PostCreated', e => {
      if (window.Laravel.user.following.includes(e.post.user_id)) {
        setPosts([e.post, ...posts])
      }
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    axios.post('/posts', {
      body: body
    }).then(response => {
      setPosts([...posts,response.data])
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
    });
    setBody(''); 
  }

  function handleChange(e) {
    setBody(e.target.value)
  }

  const renderPosts = () => {
    return (
      <>
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
                - {pos.created_at}
              </div>
              <p>{pos.body}</p>
            </div>
          </div>
        ))}
      </>
    )
  }

return (
  <div className="container-fluid">
      <div className="row justify-content-center">
          <div className="col-md-6">
              <div className="card">
                  <div className="card-header">γγ€γΌγ</div>

                  <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <textarea
                            onChange={handleChange}
                            value={body}
                            className="form-control"
                            rows="5"
                            maxLength="140"
                            placeholder="Let's write something"
                            required
                          />
                        </div>
                        <input type="submit" value="ιδΏ‘" className="form-control" />
                      </form>
                  </div>
              </div>
          </div>

          {posts.length > 0 && (
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Recent tweets</div>
                      {!loading ? renderPosts() : 'Loading'}
                    <div className="card-body"></div>
                </div>
            </div>
          )}
      </div>
  </div>  
  )
}

export default App;
