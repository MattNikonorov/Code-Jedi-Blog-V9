import Pic1 from './/wordcloud.png'
export default function code1() {
  return (
    <div className="container"> 
        <h1>Create a wordcloud of news headlines in python!</h1>
        <div className="sub"><b>Today, I&apos;ll be showing you a simple way to make a wordcloud of news headlines in python!</b></div>
        <hr align="center" width="80%" className="hr9"></hr>
        <div className="content2">If you haven&apos;t read <a href="https://dev.to/code_jedi/scrape-news-headlines-with-python-1go6">this tutorial</a> explaining how to scrape news headlines in python, make sure you do.
        In summary, here&apos;s the code for scraping news headlines in python:</div>
        <code>
        <div className="cont">
        import requests
        <br></br>
        from bs4 import BeautifulSoup
        <br></br>
        <br></br>
        url=&apos;https://www.bbc.com/news&apos;
        <br></br>
        response = requests.get(url)
        <br></br>
        <br></br>
        soup = BeautifulSoup(response.text, &apos;html.parser&apos;)
        <br></br>
        headlines = soup.find(&apos;body&apos;).find_all(&apos;h3&apos;)
        <br></br>
        for x in headlines:
        <br></br>
        &#160;&#160;print(x.text.strip())
        </div>
        </code>
        <div className="content2">
        To create a wordcloud out of these news headlines, first import these 2 libraries beside the libraries needed to scrape our news source:
        </div>
        <code>
        <div className="cont">
        import requests
        <br></br>
        from bs4 import BeautifulSoup
        <br></br>
        from wordcloud import WordCloud #add wordcloud
        <br></br>
        import matplotlib.pyplot as plt #add pyplot from matplotlib
        <br></br>
        </div>
        </code>
        <div className="content2">Next, replace</div>
        <code>
        <div className="cont">
        for x in headlines:
        <br></br>
        print(x.text.strip())
        </div>
        </code>
        <div className="content2">With</div>
        <code>
        <div className="cont">
        h3text = &apos;&apos;
        <br></br>
        for x in el:
        <br></br>
        &#160;&#160;h3text = h3text + &apos; &apos; + x.text.strip()
        </div>
        </code>
        <div className="content2"><i>This will first define the <icode>h3text</icode> string, then add every news headline to the string and seperate them with spaces.</i></div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2"><b>Before we make the wordcloud, you can check the news headlines by using </b><icode>print(h3text)</icode></div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2"><b>To make the wordcloud, add these lines of code to the end of your script:</b></div>
        <code>
        <div className="cont">
        wordcloud = WordCloud(width=500, height=500, margin=0).generate(soup.get_text(h3text))
        <br></br>
        plt.imshow(wordcloud, interpolation=&apos;bilinear&apos;)
        <br></br>
        plt.axis(&quot;off&quot;)
        <br></br>
        plt.margins(x=0, y=0)
        <br></br>
        plt.show()
        </div>
        </code>
        <div className="content2">
        <b>Let me explain...</b>
        <ul>
        <li>First create a wordcloud(well, more like a box in this case) sized 500 by 500.</li>
        <li>Next, our wordcloud will be created using <icode>plt.imshow()</icode> (<icode>interpolation=&apos;bilinear&apos;</icode> just makes the words in the wordcloud easier to read).</li>
        <li><icode>plt.axis(&quot;off&quot;)</icode> and <icode>plt.margins(x=0, y=0)</icode> make sure our wordcloud isn&apos;t displayed as a graph.</li>
        <li>Finally, our wordcloud is displayed using <icode>plt.show()</icode>.</li>
        </ul>
        </div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2"><b>If you run your code, your wordcloud should look something like this:</b></div>
        <div className="i1"><img src={Pic1} /></div>
        <div className="content2">
        <i>Of course, your wordcloud will probably be quite different since news headlines change all the time.</i>
        </div>
        <hr align="center" width="60%" className="hr8"></hr>
        <div className="content2"><h3>That&apos;s it for this Tutorial/Mini-project!</h3></div>


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
          font-size: 25px;
        }
        .i1{
          margin-top: 2%;
          width: 60%;
          height: auto;
        }
        a{
          color: lightseagreen;
          font-size: 24px;
        }
        code {
          margin-top: 2%;
          background: #82caaf;
          border-radius: 5px;
          opacity: 0.8;
          overflow-x: scroll;
          width: 60%;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .cont{
          overflow-x: scroll;
          width: 420%;
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
          margin-top: 18.5%;
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
          width: 70%;
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