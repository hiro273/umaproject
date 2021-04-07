import React from 'react'

const suka = () => {
  return (
    <div id="tableLine">

      <div id="leftcss">
        <img src="/img/Form/FormSuka.png"/>
      </div>

      
      <div id="rightcss">
      <img src="/img/intro/IntroSuka.png" id="introSize"/>
      <br/>
      <br/>
        <table>
          <thead>
            <tr id="colorInner">
              <th>バ場適正</th><th>距離</th><th>脚質</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>芝</td><td>マイル<br/>--------------<br/>中距離<br/>--------------<br/>長距離</td><td>逃げ<br/>--------------<br/>先行</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>

        <table>
          <thead>
            <tr><th>バ場適正</th><td><img src="/img/Icon/showA.png" id="imgsize" /><br/>----------<br/>芝</td><td><img src="/img/Icon/showG.png" id="imgsize" /><br/>----------<br/>ダート</td><td></td><td></td></tr>

            <tr><th>距離適性</th><td><img src="/img/Icon/showF.png" id="imgsize" /><br/>----------<br/>短距離</td><td><img src="/img/Icon/showA.png" id="imgsize" /><br/>----------<br/>マイル</td><td><img src="/img/Icon/showA.png" id="imgsize" /><br/>----------<br/>中距離</td><td><img src="/img/Icon/showB.png" id="imgsize" /><br/>----------<br/>長距離</td></tr>

            <tr><th>脚質適性</th><td><img src="/img/Icon/showA.png" id="imgsize" /><br/>----------<br/>逃げ</td><td><img src="/img/Icon/showA.png" id="imgsize" /><br/>----------<br/>先行</td><td><img src="/img/Icon/showE.png" id="imgsize" /><br/>----------<br/>差し</td><td><img src="/img/Icon/showG.png" id="imgsize" /><br/>----------<br/>追込</td></tr>
          </thead>
        </table>
        <br/>
        <br/>

        <table>
          <thead>
            <tr>
              <th><img src="/img/Icon/Speed.png" id="imgsize"/></th><th><img src="/img/Icon/Heart.png" id="imgsize"/></th><th><img src="/img/Icon/Power.png" id="imgsize"/></th><th><img src="/img/Icon/String.png" id="imgsize"/></th><th><img src="/img/Icon/Iq.png" id="imgsize"/></th>
            </tr>
          </thead>

          <tbody>
            <tr><td>+10%</td><td>+0%</td><td>+0%</td><td>+20%</td><td>+0%</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default suka
