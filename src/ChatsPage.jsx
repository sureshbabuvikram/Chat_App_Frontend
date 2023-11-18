// import React from 'react';
// import {PrettyChatWindow} from 'react-chat-engine-pretty';

// const ChatsPage = (props) => {
//     return (
//         <div style={{height:'100vh'}}>
//             <PrettyChatWindow
//             projectId='5753945a-6419-4e71-a8b7-d8958172fb05'
//             username={props.user.username}
//             secret={props.user.secret}
//             style={{height:'100%'}}
//             />
//         </div>
//     );
// };

// export default ChatsPage;


import {MultiChatSocket,useMultiChatLogic,MultiChatWindow  } from 'react-chat-engine-advanced';
  
  const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
      '5753945a-6419-4e71-a8b7-d8958172fb05',props.user.username,props.user.secret);
    return (
      <div style={{height:'100vh'}}>
        <MultiChatWindow {...chatProps} />
        <MultiChatSocket {...chatProps}  style={{height:'100%'}} />
      </div>
    );
  }
  export default ChatsPage;