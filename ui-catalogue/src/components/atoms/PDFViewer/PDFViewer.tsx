/* import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar'

// Import styles
import '@react-pdf-viewer/thumbnail/lib/styles/index.css'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/toolbar/lib/styles/index.css'

const PDFViewer: React.FC = () => {
  const thumbnailPluginInstance = thumbnailPlugin()
  const { Thumbnails } = thumbnailPluginInstance

  const toolbarPluginInstance = toolbarPlugin()
  const { Toolbar } = toolbarPluginInstance
  // const fileUrlServeLocal = 'http://localhost:9999/api/v1/errors/'
  // const reportWithPDFLink = 'http://cesce-cesdata-alt-pre.cesce.grupo.loc/informes/7224769'
  const accessToken = localStorage.getItem('token')
  const fileUrl = 'http://cesce-cesdata-pre.cesce.grupo.loc/informes-file/7224769'
  // const fileUrlDocx = 'http://cesce-cesdata-pre.cesce.grupo.loc/informes-file/7295276'

  return (
    <>
      <div
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          display: 'flex',
          height: '100%'
        }}
      >
        <div
          style={{
            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
            overflow: 'auto',
            width: '30%'
          }}
        >
          <Thumbnails />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              border: '1px solid rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <div
              style={{
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                padding: '4px'
              }}
            >
              <Toolbar />
            </div>
            <div
              style={{
                flex: 1,
                overflow: 'hidden'
              }}
            >
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={fileUrl}
                  plugins={[
                    thumbnailPluginInstance,
                    toolbarPluginInstance
                  ]}
                  httpHeaders={{
                    Authorization: `Bearer ${accessToken}`
                  }}
                  withCredentials={true}
                />
              </Worker>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { PDFViewer } */
