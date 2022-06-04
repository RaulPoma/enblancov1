import React from 'react'

import EventosCompv2 from './EventComp/EventosCompv2';
import Videos from './Videos/Videos'

const Eventos = () => {
  return (
    <div id='eventos' className=' mt-12 lg:mt-24 '>
        <EventosCompv2 />
        <Videos />
    </div>
  )
}

export default Eventos