import React, { useEffect } from 'react';
import {useRequest} from 'ahooks';
import { getName } from '@/services/price.service';
import {Button, Space} from 'antd';

const users = [
    { id: '1', username: 'A' },
    { id: '2', username: 'B' },
    { id: '3', username: 'C' },
  ];
interface Props {}
const Price: React.FC<Props> = (props: Props) => {
    const {run, fetches} = useRequest(getName, { 
        manual: true,
        fetchKey: id => id,
        onSuccess:(res, req) => {
            console.log('res=', res);
            console.log('req=', req[0]);
            
        }
    });
    
    useEffect(() => {
        console.log('fetches=',fetches)
    },[fetches]);

    return <Space direction='vertical'>
        {
            users.map((u,i) => <Button
                key={i}
                loading={fetches[u.id]?.loading}
                onClick={() => {
                    run(u.id);
                }}
            >{u.username}</Button>)
        }
    </Space>;
};
export default Price;