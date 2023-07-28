import React from 'react'

function ExambleIf(props) {
    const Islogedin=(props.Islogedin)

if(Islogedin){
    return <welcome/>
}else{
    return <try again/>
}
}
export default ExambleIf
