const render = (vNode, container) => {
    if (vNode === undefined) return
    if (typeof vNode === 'string') {
        const textNode = document.createTextNode(vNode)
        return container.appendChild(textNode)
    }

    const { tag, attrs } = vNode
    const dom = document.createElement(tag)
    if (attrs) {
        Object.keys(attrs).forEach(key => {
            const domAttr = attrs[key]
            setAttribute(dom, key, domAttr)
        })
    }
    if (vNode.children && vNode.children.length > 0) {
        vNode.children.forEach(child => {
            render(child, dom)
        })
    }
    return container.appendChild(dom)
}

const setAttribute = (dom, key, value) => {
    // className 转为 class
    if (key === 'className') {
        key = 'class'
    }

    // 如果attr是事件
    if (/on\w+/.test(key)) {
        key = key.toLowerCase()
        dom[key] = value || ''
    } else if (key === 'style') {
        if (!value || typeof value === 'string') {
            dom.style.cssText = value || ''
        } else if (value && typeof value === 'object') {
            for (let k in value) {
                const { k } = value
                if (Array.isArray(k)) {
                    dom.style[k] = `${value[k]}px`
                } else {
                    dom.style[k] = value[k]
                }
            }
        }
    } else {
        if (key in dom) {
            dom[key] = value || ''
        }
        if (value) {
            dom.setAttribute(key, value)
        } else {
            dom.removeAttribute(key)
        }
    }
}

const ReactDom = {
    render
}

export default ReactDom