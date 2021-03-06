import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import classes from './SearchBar.scss';
import { artworkForMediaItem } from '../../../../utils/Utils';
import AlbumPanel from '../../../Common/AlbumPanel/AlbumPanel';
import ModalContext from '../../../Common/Modal/ModalContext';

function AlbumResultItem(props) {
  const { album, size } = props;
  const isCatalog = album.type === 'albums';

  return (
    <ModalContext.Consumer>
      {({ push }) => (
        <div
          className={cx(classes.result, classes.album)}
          onClick={() => push(<AlbumPanel key={album.id} album={album} />)}
        >
          <span className={classes.artwork}>
            {isCatalog && (
              <div className={classes.catalogIndicator}>
                <i className={'fab fa-apple'} />
              </div>
            )}
            <img
              src={artworkForMediaItem(album, size)}
              alt={album.attributes.name}
              style={{ width: size, height: size }}
            />
          </span>

          <span className={classes.name}>{album.attributes.name}</span>
        </div>
      )}
    </ModalContext.Consumer>
  );
}

AlbumResultItem.propTypes = {
  album: PropTypes.any.isRequired,
  size: PropTypes.any.isRequired,
};

export default AlbumResultItem;
