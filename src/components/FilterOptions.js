import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setAlphabetic } from '../store/filter/actionCreators';

import '../styles/App.css';

export default function FilterOptions(){

    const dispatch = useDispatch()

    const handleOnChange = (picked) =>{
        console.log("cambio", picked)
        if (picked === 'alphabetic'){
            dispatch(setAlphabetic(false))
            return
        }
        dispatch(setAlphabetic(true))
    }

    return (
        <Formik
            initialValues={{picked: 'alphabetic'}}
            className='filter-options'>
        {({values}) => (
            <Form>
                <div role="group" onChange={() => handleOnChange(values.picked)}>
                    <label>
                        <Field type="radio" name="picked" value="alphabetic"/>
                        Asc. order
                    </label>
                    <label>
                        <Field type="radio" name="picked" value="non-alphabetic"/>
                        Desc. order
                    </label>
                </div>
            </Form>
        )}
        </Formik>
    )
}