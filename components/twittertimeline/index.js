import React from 'react';

const TwitterTimeline = ({ id }) => {
    React.useEffect(() => {
        const s = document.createElement('script');
        s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        s.setAttribute('async', 'true');
        document.head.appendChild(s);
    }, []);

    return (
        <>
            <a className='twitter-timeline' href={`https://twitter.com/${id}?ref_src=twsrc%5Etfw`}>
                Piulades de {id}
            </a>{' '}
            <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>
        </>
    );
};

export default TwitterTimeline;
