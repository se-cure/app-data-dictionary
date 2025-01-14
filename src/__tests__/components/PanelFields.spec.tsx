/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React from 'react';
import renderer from 'react-test-renderer';
import { theme} from "@looker/components"
import { ThemeProvider } from "styled-components"
import { columns } from '../../components/DataDictionary'
import { mockCurrentModel, mockCurrentExplore } from "../MockData/MockData";
import { PanelFields } from '../../components/PanelFields'

jest.mock("../../components/DetailDrawer", () => ({
  DetailDrawer: () => "DetailDrawer"
}))

jest.mock("../../components/Fields", () => ({
  Fields: () => "Fields"
}))

jest.mock("../../components/ViewOptions", () => ({
  ViewOptions: () => "ViewOptions"
}))

jest.mock("../../components/ExternalLink", () => ({
  ExternalLink: () => "ExternalLink"
}))

jest.mock("../../components/QuickSearch", () => ({
  QuickSearch: () => "QuickSearch"
}))

jest.mock('../../utils/routes', () => {
  return {
    useCurrentModel: jest.fn(() => {
      return mockCurrentModel
    }),
    useCurrentExplore: jest.fn(() => {
      return mockCurrentExplore
    })
  }
})


it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <PanelFields
        currentModel={mockCurrentModel}
        currentExplore={mockCurrentExplore}
        loadingExplore={null}
        columns={columns}
        comments={"{}"}
        addComment={()=>{}}
        editComment={()=>{}}
        deleteComment={()=>{}}
        authors={[]}
        me={{}}
        permissions={{}}
      />
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
