import { Select } from 'grommet';
import React, { useState } from 'react';
import i18next from 'i18next';

function changeLang(lang) {
    i18next.changeLanguage(lang);
}

const LangSelect = () => {
    const options = [
        { label: '한국어', value: 'ko' },
        { label: 'English', value: 'en'}
    ];
    const [value, setState] = useState(options[0].value)
    return (
        <Select
            options={options}
            placeholder='Language'
            labelKey='label'
            valueKey='value'
            onChange={({ option }) => {
            setState(option.value)
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