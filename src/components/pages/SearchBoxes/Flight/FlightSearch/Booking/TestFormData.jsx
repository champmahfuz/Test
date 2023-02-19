import React, { useState } from 'react';
// import axios from '../../../../../../api/axios';
import axios from 'axios';


const PASSENGER_URL = '/api/passenger'
const TestFormData = () => {
    const [image, setImage] = useState(null)
    const [image2, setImage2] = useState(null)
    const [name, setName] = useState('HASIB')
    const [desc, setDesc] = useState('TEST DATA')
    // const handleFile = (e) => {
    //     console.log(e.target.files[0])
    //     setImage(e.target.files[0])
    // }
    const handleApi = async (e) => {
        console.log('formData', image)

        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image)
        formData.append('name', name)
        formData.append('desc', desc)

        axios.post('http://localhost:5000/api/passenger',
            formData
        )
            .then((res) => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        // console.log(formData)
    }
    return (
        <div>
            <h1>The Form </h1>
            <form  >
                <input type="text" name='name' onChange={ e => setName(e.target.value) } />
                <input type="text" name='desc' onChange={ e => setDesc(e.target.value) } />
                <input type="file" name='file' onChange={ e => setImage(e.target.files[0]) } />
                <input type="file" name='file' onChange={ e => setImage2(e.target.files[0]) } />
                <button onClick={ handleApi }>Upload</button>
            </form>
        </div>
    );
};

export default TestFormData;