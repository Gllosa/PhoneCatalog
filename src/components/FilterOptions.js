import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { setAlphabetic } from '../reducers/filterReducer';

import '../styles/App.css';

export default function FilterOptions(){

    const dispatch = useDispatch()

    const handleOnChange = (picked) =>{
        if (picked === 'alphabetic'){
            dispatch(setAlphabetic(true))
            return
        }
        dispatch(setAlphabetic(false))
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