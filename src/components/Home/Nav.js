
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                {
                    this.props.tabs.map((item, i) => (      // 此处用来获取数据组件
                        // 通过获取URl进行判断css
                        <li className={this.props.location.pathname === item.path ? 'active' : ''} key={i}><Link to={`${item.path}`}>{item.text}</Link></li>))
                }
            </ul>
        )
    }
};
Nav.defaultProps = {
    tabs: [
        {
            text: '个性推荐',
            path: '/',
        },
        {
            text: '新歌',
            path: '/new',
        },
        {
            text: '排行榜',
            path: '/rank',
        },
        {
            text: '歌手',
            path: '/artist',
        }
    ]
};