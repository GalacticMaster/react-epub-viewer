import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { EpubViewer, ReactEpubViewer } from 'modules';
import { ViewerRef } from 'types';

interface Props {
  VIEWER_TYPE?: 'ReactViewer' | 'EpubViewer';
}

const App = ({ VIEWER_TYPE = 'ReactViewer' }: Props) => {
  const EPUB_URL =
    'https://galacticmaster.github.io/lilacharitra/epubjs-reader-master/reader/Amhi%20purvardh.epub';
  const ref = useRef<ViewerRef>(null);

  return (
    <>
      {VIEWER_TYPE === 'ReactViewer' && (
        <>
          <ReactEpubViewer url={EPUB_URL} ref={ref} />
        </>
      )}
      {VIEWER_TYPE === 'EpubViewer' && (
        <>
          <EpubViewer url={EPUB_URL} ref={ref} />
        </>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
