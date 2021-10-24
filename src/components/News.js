import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title:
  //       "A-level textbook withdrawn over 'shocking' Native American question",
  //     description:
  //       "The exam board AQA apologises and says the textbook should never have been approved.",
  //     url: "http://www.bbc.co.uk/news/education-59024961",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/EC49/production/_121198406_aqanativeamericansnotes.png",
  //     publishedAt: "2021-10-24T02:52:21.0351385Z",
  //     content:
  //       'By Harry Farley BBC News\r\nAn A-level history textbook has been withdrawn after a teacher said she was "horrified" to discover an image asking whether the treatment of Native Americans was exaggerated… [+3580 chars]',
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Record-breaking ferris wheel opens in Dubai",
  //     description:
  //       "The massive wheel was opened in Dubai with a lavish fireworks display to mark the occasion.",
  //     url: "http://www.bbc.co.uk/news/world-middle-east-59024669",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/775F/production/_121195503_p09zy86q.jpg",
  //     publishedAt: "2021-10-24T01:37:22.5290629Z",
  //     content:
  //       "Dubai officially opened the world's largest and tallest ferris wheel on Thursday, as part of an initiative to bolster the city's status as a major tourism hub. It's known as the \"Dubai Eye\" and stand… [+9 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Colombia's most wanted drug lord Otoniel captured",
  //     description:
  //       "Otoniel, who heads the powerful Gulf Clan gang, was held in a raid in a town near the Panama border.",
  //     url: "http://www.bbc.co.uk/news/world-latin-america-59026214",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/118DB/production/_121199817_hi071501654.jpg",
  //     publishedAt: "2021-10-24T01:37:20.8263616Z",
  //     content:
  //       "Image caption, The army released a photo showing its soldiers guarding the handcuffed Dairo Antonio Usaga\r\nColombia's most wanted drug trafficker and the leader of the country's largest criminal gang… [+2314 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title:
  //       "Joel Souza, filmmaker wounded in Alec Baldwin gun incident, 'gutted' at friend's death",
  //     description:
  //       "Joel Souza, wounded by a gun fired by actor Alec Baldwin, grieves for lost friend Halyna Hutchins.",
  //     url: "http://www.bbc.co.uk/news/world-us-canada-59024820",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/022F/production/_121195500_mediaitem121196409.jpg",
  //     publishedAt: "2021-10-23T18:22:23.7521792Z",
  //     content:
  //       'Media caption, First responders and others react to Rust set death\r\nFilm director Joel Souza says he is "gutted by the loss of my friend and colleague" Halyna Hutchins, in his first statement since a… [+4143 chars]',
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Greta on Greta: 'I'm a different person in private'",
  //     description:
  //       "The activist says she's unrecognisable when she isn't campaigning for climate action.",
  //     url: "http://www.bbc.co.uk/news/science-environment-59024667",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/DDB7/production/_121195765_p09zxmbq.jpg",
  //     publishedAt: "2021-10-23T16:37:24.014527Z",
  //     content:
  //       "The Swedish environmental activist Greta Thunberg has told the BBC there's a big difference between her public and private identities. \r\nSpeaking to the BBC's global science correspondent Rebecca Mor… [+128 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Turkey moves to throw out US and nine other envoys",
  //     description:
  //       'President Recep Tayyip Erdogan declares them "persona non grata" for urging an activist\'s release.',
  //     url: "http://www.bbc.co.uk/news/world-europe-59023465",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/11804/production/_110948617_gettyimages-1055696742.jpg",
  //     publishedAt: "2021-10-23T15:37:23.2705674Z",
  //     content:
  //       "Image caption, Osman Kavala has spent more than four years in jail, without conviction\r\nTurkey's President Recep Tayyip Erdogan says he has ordered 10 ambassadors, including those from the US and Fra… [+2319 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Record high migrant entries at US-Mexico border",
  //     description:
  //       "The US says over 1.7 million migrants were stopped in the past 12 months, including 145,000 children.",
  //     url: "http://www.bbc.co.uk/news/world-us-canada-59019791",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/4479/production/_121192571_c91e6350-fc6d-4a80-8b5a-16cd305e8bf2.jpg",
  //     publishedAt: "2021-10-23T04:07:22.0148427Z",
  //     content:
  //       "Image caption, Of all those detained, the biggest category were adults travelling without children\r\nThe US says more than 1.7 million migrants were detained along its border with Mexico in the past 1… [+2563 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Will Apple be the last US tech giant left in China?",
  //     description:
  //       "As Microsoft closes down the main version of LinkedIn, Apple looks more alone in China than ever.",
  //     url: "http://www.bbc.co.uk/news/technology-59009796",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/394C/production/_121186641_gettyimages-1235783628.jpg",
  //     publishedAt: "2021-10-23T00:07:28.8563976Z",
  //     content:
  //       "By James ClaytonNorth America technology reporter\r\nImage source, Getty Images\r\nImage caption, Apple has a big presence in China - unlike many of its peers\r\nThere was a time when the US tech giants we… [+5041 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "'If our river dried up we would die'",
  //     description:
  //       "Officials destroyed dams so salmon could swim upstream. It helped preserve the livelihoods of the Hupa tribe.",
  //     url: "http://www.bbc.co.uk/news/world-us-canada-59018245",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/17FB5/production/_121192289_p09zv4b1.jpg",
  //     publishedAt: "2021-10-23T00:07:24.2794112Z",
  //     content:
  //       "The Klamath river is becoming too warm for salmon to live. If it dries up, a Native American tribe could face its doom.\r\nThe extreme drought in California has made the river shrink and heated it up. … [+185 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-news",
  //       name: "BBC News",
  //     },
  //     author: "BBC News",
  //     title: "Texas abortion law to stay in place until Supreme Court decision",
  //     description:
  //       "The controversial law will be tested next month when the court holds an expedited hearing.",
  //     url: "http://www.bbc.co.uk/news/world-us-canada-59017479",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/10C01/production/_121190686_gettyimages-1262756719.jpg",
  //     publishedAt: "2021-10-22T20:37:22.8561975Z",
  //     content:
  //       "Image source, Getty Images\r\nThe US Supreme Court will allow Texas to maintain a near-total ban on abortions, but will take up the case next month in a rare sped up process.\r\nThe law, known as SB8, gi… [+2281 chars]",
  //   },
  // ];

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b95b74c0d5d64f3284e1e92a7c326bbc';
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({articles: parseData.articles})

  }

  render() {
    return (
      <div>
        News component
        <div className="container my-3">
          <h1>GoodNews - Top headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title?element.title: ""}
                    description={element.description?element.description: ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
