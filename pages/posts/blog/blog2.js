import Pic1 from './/blog2a1.png'
import Pic2 from './/fakenews.png'
export default function code1() {
  return (
    <div className="container"> 
        <h1>Scrape news headlines with python in 10 lines of code!</h1>
        <div className="sub"><b>Today I&apos;ll show you a way to scrape news headlines in python in under 10 lines of code!</b></div>
        <hr align="center" width="80%" className="hr9"></hr>
        <div className="content"><b>Let&apos;s get started...</b></div>
        <div className="content2">First of all, make sure to import these libraries at the beginning of your python script:</div>
        <code>
        import requests
        from bs4 import BeautifulSoup
        For this tutorial, I&apos;ll be using BBC news as my news source, use these 2 lines of code to get it&apos;s url:
        url=&apos;https://www.bbc.com/news&apos;
        response = requests.get(url)
        </code>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">
        Now we&apos;re ready to scrape using BeautifulSoup!

        Head over to BBC news and inspect a news headline by right clicking and pressing inspect.
        As you&apos;ll see, all news headlines are contained within an &quot;h3&quot; tag:</div>
        <div className="i1"><img src={Pic1} className="i1" /></div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2">
        Now add these 4 lines of code to scrape and display all the h3 tags from BBC news:
        </div>
        <code>
        soup = BeautifulSoup(response.text, &apos;html.parser&apos;)
        headlines = soup.find(&apos;body&apos;).find_all(&apos;h3&apos;)
        for x in headlines:
            print(x.text.strip())
        </code>
        <div className="content2">
        <ul>
        <li>First, we define <icode>soup</icode> as the innerHTML of the BBC news webpage.</li>
        <li>Next, we define <icode>headlines</icode> as an array of all h3 tags found within the webpage.</li>
        <li>Finally, paddle through the <icode>headlines</icode> array and display all of it&apos;s contents one by one ridding each element of it&apos;s outerHTML using the <icode>text.strip()</icode> method.
        Now if you run your script, your output should look something like this:</li>
        </ul>
        </div>
        <hr align="center" width="60%" className="hr8"></hr>
        <hr align="center" width="80%" className="hr8"></hr>
      <h3 className="foot">
        <a href="/">
          <a>Back to home</a>
        </a>
      </h3>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        i{
          font-size: 20px;
        }
        li{
          font-size: 20px;
        }
        .i1{
          margin-top: 2%;
          width: 60%;
          height: auto;
        }

        code {
          margin-top: 2%;
          background: #82caaf;
          border-radius: 5px;
          opacity: 0.8;
          width: 60%;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        icode {
          margin-top: 2%;
          background: #82caaf;
          border-radius: 5px;
          opacity: 0.8;
          padding: 0.2rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .hr9{
          margin-top: 16%;
        }
        .hr8{
          margin-top: 2%;
        }
        .content{
          margin-top: 10%;
          width: 60%;
          font-size: 24px;
        }
        .content2{
          margin-top: 2%;
          width: 60%;
          font-size: 24px;
        }
        .sub{
          position: absolute;
          top: 23%;
          font-size: 22px;
          color: #82caaf; 
        }
        h1{
          position: absolute;
          top: 6%;
          font-size: 37px;
        }
        .foot{
          position: sticky;
          top: 90%;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}