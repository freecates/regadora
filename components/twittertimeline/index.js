import React from 'react';

const TwitterTimeline = ({ id }) => {
    React.useEffect(() => {
        // eslint-disable-next-line no-undef
        const s = document.createElement('script');
        s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        s.setAttribute('async', 'true');
        // eslint-disable-next-line no-undef
        document.head.appendChild(s);
    }, []);

    return (
        <>
            <a className='twitter-timeline' href={`https://twitter.com/${id}?ref_src=twsrc%5Etfw`}>
                Piulets de {id}
            </a>{' '}
            <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8'></script>
        </>
    );
};

export default TwitterTimeline;
