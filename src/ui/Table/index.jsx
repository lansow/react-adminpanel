import { Table as AntTable } from '@/ui'
import { useMemo } from 'react'

export default function Table({data, columns, rowKey = 'id'}) {

    const newColumns = useMemo(() => {
        return columns.map(c => ({ dataIndex: c.key, ...c }))
    }, [columns])

    return (
        <AntTable dataSource={data} columns={newColumns} rowKey={rowKey} />
    )
}