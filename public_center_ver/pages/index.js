import React from 'react';
import { useRouter } from 'next/router'; // useRouter 추가

const styles = {
    from: {
        color: 'red',
    },
};

export default () => {
    const router = useRouter(); // useRouter()로 router 객체 가져오기

    return (
        <div>
            Home
            {
                router.query.history ? (
                    <div style={styles.from}>
                        From the {router.query.history}
                    </div>
                ) : null
            }
        </div>
    );
}