import { screen } from '@testing-library/react';
import { componentRender } from "shared/lib/tests/componentRender/componentRender"
import { EditableProfileCard } from './EditableProfileCard'
import { Profile, ProfileShema } from '../model/types/profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/countrySelect';
import { profileReducer } from '../model/slice/ProfileSlice';
import { Reducer } from 'react';
import { Action } from '@reduxjs/toolkit';
import userEvent from '@testing-library/user-event'
import { $api } from 'shared/api/api';


const profile:Profile = {
    id: '1',
    first: 'Danya',
    lastname: 'Ocheretin',
    age: 24,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'Overlab',
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user:{
            authData: {
                id:'1', username: 'admin'
            }
        }
        
    },
    asyncReducers: {
        profile: profileReducer as Reducer<ProfileShema | undefined, Action<any>>
    }
}


    describe('features/EditableProfileCard', () => {
        test('Change profile', async () => {
            componentRender(<EditableProfileCard id = '1' />, options)
            await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'))
            expect(screen.getByTestId('EditableProfileCard.CancelButton')).toBeInTheDocument()
        })

        test('Cancel change data', async () => {
            componentRender(<EditableProfileCard id = '1' />, options)
            await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
            
            await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
            await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

            await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
            await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user');

            expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
            expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');
            
            await userEvent.click(screen.getByTestId('EditableProfileCard.CancelButton'));

            expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('Danya');
            expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('Ocheretin');
        })

        test('Error change data', async () => {
            componentRender(<EditableProfileCard id = '1' />, options)
            await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
            await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
            await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

            expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
        })

        test('Right change data', async () => {
            componentRender(<EditableProfileCard id = '1' />, options)
            const mockFn = jest.spyOn($api, 'put')
            await userEvent.click(screen.getByTestId('EditableProfileCard.EditButton'));
            await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
            await userEvent.click(screen.getByTestId('EditableProfileCard.SaveButton'));

            expect(mockFn).toHaveBeenCalled();
        })
    })
