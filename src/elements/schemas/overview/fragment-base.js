export class FragmentBase{
  copyMeta(from, to){}

  metaToModel(model, meta){}

  addon(node){
    node.$schema.overView.push(this.schema)
  }

  setDefaultValue(defaultValue){
    this.schema.defaultValue = defaultValue
    return this
  }
}