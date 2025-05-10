'use client'

import { UploadDropzone } from '@/utils/uploadthing'
import React from 'react'

export default function UploadthingButton() {
  return (
    <UploadDropzone endpoint={ 'imageUploader' } />
  )
}
