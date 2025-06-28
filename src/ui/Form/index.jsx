import { Form, Input, Select as AntSelect } from '@/ui'
import React from 'react'

const { Option } = AntSelect;


export function Text({label, name, required, len, min, max, type, ...props}) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required, len, min, max, type }]}
        >
            <Input {...props} maxLength={ max || len} />
        </Form.Item>
    )
}

export function Password({label, name, required, len, min, max, ...props}) {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required, len, min, max }]}
        >
            <Input.Password {...props} maxLength={ max || len} />
        </Form.Item>
    )
}


export function Select({label, name, required, options = [], ...props}) {


    return (
        <Form.Item name={name} label={label} rules={[{ required }]}>
        <AntSelect
            {...props}
        >
            {options.map(({ value, label }) => <Option key={value} value={value}>{label}</Option>)}
        </AntSelect>
        </Form.Item>
    )
}

