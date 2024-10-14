import { BridgeComponent } from "@hotwired/hotwire-native-bridge"

export default class extends BridgeComponent {
  static component = "keyboard"

  connect() {
    super.connect()
    this.notifyBridgeOfConnect()
  }

  toggleToolbar() {
    this.send("focus", {}, () => {})

  }

  notifyBridgeOfConnect() {
    const element = this.element 

    this.send("heading1", {}, () => {
      this.toggleAttribute(element.editor, "heading1")
    })

    this.send('bold', {}, () => {
      this.toggleAttribute(element.editor, "bold")
    })


    this.send('italic', {}, () => {
      this.toggleAttribute(element.editor, "italic")
    })


    this.send('undo', {}, () => {
      element.editor.undo()
    })


    this.send('redo', {}, () => {
      element.editor.redo()
  })
  }


  toggleAttribute(editor, attribute) {
    const isActive = editor.attributeIsActive(attribute)

    if (isActive) {
      editor.deactivateAttribute(attribute)
    } else {
      editor.activateAttribute(attribute)
    }
  }
}
