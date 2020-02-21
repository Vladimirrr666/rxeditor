import {RXTextfieldable} from "./textfieldable"
//import {addonTypyTdstInthneItem} from "../schemas/content/thst-inthne-item"

export class HTMLTd extends RXTextfieldable{
  constructor() {
    super()
    this.toolboxInfo.groupId = 'groupHtml'
    this.toolboxInfo.elementId = 'htmlTd'
    this.toolboxInfo.elementName = "td"
    this.className = 'HTMLTd'

    this.editMarginStyle.padding = '10px'
    //this.editMarginStyle = {}

    //this.groups.paragraphOptions = {
    //  label:'Paragraph Options'
    //}
    this.$meta.tag = 'td'
    this.label = "td"
    this.acceptedChildren=''
    this.exceptChildren = ['BSCol','BSW100','HTMLThead', 'HTMLTBody', 
                           'HTMLTh', 'HTMLTr', 'HTMLTd']

    //addonTypyTdstInthneItem(this)
  }

  make(){
    return new HTMLTd
  }

}
