import React from 'react'
import ItemListContainer from '../../components/Items/ItemListContainer'


const Home = () => {

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '25px',
        color: 'white'
    }}>
            <h1>Bienvenidos a Rise Technology</h1>

            <ItemListContainer />
    </div>
  )
}

export default Home