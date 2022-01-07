import React ,{createContext,useState} from 'react'

export const ContextApi = createContext(); //creating the space for context //useState for storing the values

export const Contextdata = (props) => {  /// only name eport component needed //context // it must be used only for wrapping the element need the data in app js file
    const [student,setStudent]=useState([ // json data required
        {
            'id':'1',
            'name':'john',
            'age':'24',
            'course':'MERN',
            'batch':'oct'
        },
        {
            'id':'2',
            'name':'joe',
            'age':'25',
            'course':'MERN',
            'batch':'oct'
        },
        {
            'id':'3',
            'name':'biden',
            'age':'36',
            'course':'MERN',
            'batch':'sep'
        },
        {
            'id':'4',
            'name':'obama',
            'age':'29',
            'course':'MERN',
            'batch':'nov'
        },
        {
            'id':'5',
            'name':'ellen',
            'age':'27',
            'course':'MERN',
            'batch':'aug'
        }
    ])
    // console.log(ContextApi);
    // console.log(Contextdata);
    
    return (
        <ContextApi.Provider value={[student,setStudent]}>{/*passing the datas as props to the children by exporting the contextapi in required places */}
            {props.children}
        </ContextApi.Provider>
    )
}
