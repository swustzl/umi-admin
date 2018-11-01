import React from 'react';
import { Modal, Form, Input, Icon, Button, Select } from 'antd';
import styles from './FileViewModal.less';

const Option = Select.Option;
export default class FileViewModal extends React.Component{
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    //console.log(e);
    this.setState({
      visible: false,
    });
  };
  renderIframe = (doc) => {
    let docType = doc && doc.contentType ? doc.contentType.toLowerCase() : undefined;
    if (!docType) {
      return null
    }
    if (['png', 'jpg', 'jpeg', 'gif', 'bmp', 'image/png', 'image/jpeg'].includes(docType)) {
      return <img src={doc.url} style={{ maxWidth: '100%', maxHeight: '100%' }} alt={'加载图片失败'} />
    } else if (['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'pdf'].includes(docType)) {
      return (
        <iframe
          name={'doc_detail_iframe'}
          title={'文档详情'}
          style={{ width: '100%', height: '100%' }}
          //src={docType === 'pdf' ? doc.url : `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(doc.url)}`}
          src={doc.url}
          frameBorder={0}
        >该浏览器不支持</iframe>
      )
    }
    /*else if (['mp4', 'ogg'].includes(docType)) {
      return (
        <div className={styles.video}>
          <Player
            playsInline
            src={doc.docUrl}
            fluid={false}
            width={'100%'}
            height={'100%'}
          />
        </div>
      )
    }
    let fileType = getFileTypeIcon(docType)
    return (
      <div className={styles.nonsupportPreview}>
        <div className={styles.fileName}>
          <Iconfont type={fileType} colorful style={{ fontSize: '50px', marginRight: '10px', color: '#999999' }} />
          <Ellipsis lines={1}>
            {doc.name}
          </Ellipsis>
        </div>
        {
          permissions.DocumentDown &&
          <Button type={'primary'} onClick={() => { downloadDocs(doc.url, doc.name) }}>
            {`下载文件(${culDocSize(doc.size)})`}
          </Button>
        }
      </div>
    )*/
  }
  render(){
    const { viewFile = {}} = this.props;

    return(
      <Modal
        title="文件预览"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        closable={false}
        wrapClassName={styles.fileModal}
        width={1200}
        footer={false}
      >
        <div className={styles.content}>
          {
            this.renderIframe(viewFile)
          }
        </div>
      </Modal>
    )
  }
}
