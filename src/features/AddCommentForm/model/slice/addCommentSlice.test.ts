import { DeepPartial } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormAction, addCommentFormReducer } from './addCommentSlice';
import { StateSchema } from 'app/providers/StoreProvider';


describe('addCommentSlice.test', () => {
    
    test('setText', () => {
        const state:DeepPartial<AddCommentFormSchema> = {
            text: 'text'
        }
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormAction.setText('text'))).toEqual({text:'text'})
    })
    

})