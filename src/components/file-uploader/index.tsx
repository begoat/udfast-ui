import React, { useCallback } from 'react';
import { Loader } from 'rsuite';
import { useDropzone } from 'react-dropzone';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { useLocale } from '@/utils/hooks';

import uploaderStyle from './index.module.scss';

console.log('uploaderStyle', uploaderStyle);

interface FileUploaderProps {
  loading?: boolean;
}

/**
 * for testing, https://github.com/react-dropzone/react-dropzone#testing
 */
export default ({
  loading
}: FileUploaderProps) => {
  const { formatMessage } = useLocale();
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "upload-icon.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`
  );

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('onDrop', acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({ onDrop });

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div {...getRootProps({ className: uploaderStyle.container })}>
      <input {...getInputProps()} />
      <div className={uploaderStyle.inner}>
        <div className={uploaderStyle.img}>
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <p className={uploaderStyle.p}>{isDragActive ? formatMessage('fileDropActive') : formatMessage('fileDropNotActive')}</p>
      </div>
    </div>
  );
};
