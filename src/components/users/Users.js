import React, { Component } from 'react'
import UserItem from './UserItem'

 class UsersU extends Component {
     state = {
        users: [
            {
      id: '1',
      login: 'mojombo',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    },
    {
      id: '2',
      login: 'Leandro',
      avatar_url: 'https://avatars1.githubusercontent.com/u/34239373?s=400&v=4',
      html_url: 'https://github.com/LeandroDCI'
    },
    {
      id: '3',
      login: 'magnum',
      avatar_url: 'https://avatars2.githubusercontent.com/u/1268598?s=400&v=4',
      html_url: 'https://github.com/magnumripper'
    } 
        ]
     }

    render() {
        return (
            <div style={userStyle}>

             {this.state.users.map(user => (
                 <UserItem key={user.id} user={user} />
             ))}
                
            </div>
        )
    }
}

const userStyle= {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}
export default UsersU
