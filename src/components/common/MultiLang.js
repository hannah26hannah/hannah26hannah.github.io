import { Select } from 'grommet';
import React from 'react';
import i18next from 'i18next';

function changeLang(lang) {
    i18next.changeLanguage(lang);
}

const LangSelect = () => {
    const options = [
        { label: '한국어', value: 'ko' },
        { label: 'English', value: 'en'}
    ];
    
    return (
        <Select
            options={options}
            placeholder='Language'
            labelKey='label'
            valueKey='value'
            onChange={({ option }) => {
                changeLang(option.value);
            }}
            alignSelf='end'
            size='small'
            style={{
                width: '150px',
            }}
        ></Select>
    )
    }

export default LangSelect;