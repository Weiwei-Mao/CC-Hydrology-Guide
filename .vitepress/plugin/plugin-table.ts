/**
 * 表格插件
 * 为 Markdown 表格添加容器，方便样式处理
 */
import type MarkdownIt from 'markdown-it'

/**
 * 给 table 嵌套一层容器方便处理样式
 *
 * @param { Object } md markdown 实例
 */
export const PluginTable = (md: MarkdownIt): void => {
  const defaultTableOpen = md.renderer.rules.table_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

  const defaultTableClose = md.renderer.rules.table_close || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

  md.renderer.rules.table_open = (tokens, idx, options, env, self) => {
    return '<div class="vp-table__container">' + defaultTableOpen(tokens, idx, options, env, self)
  }

  md.renderer.rules.table_close = (tokens, idx, options, env, self) => {
    return defaultTableClose(tokens, idx, options, env, self) + '</div>'
  }
}
