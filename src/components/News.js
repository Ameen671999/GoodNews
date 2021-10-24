import React, { Component } from 'react'

export class News extends Component {
    render() {
        return (
            <div>
                News component
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}

export default News
