import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createI18n } from 'vue-i18n'
import LangToggle from '../LangToggle.vue'

describe('LangToggle', () => {
  let i18n

  beforeEach(() => {
    i18n = createI18n({
      legacy: false,
      locale: 'pt',
      messages: {
        pt: { langToggleAria: 'Alternar' },
        en: { langToggleAria: 'Switch' },
      },
    })

    // Clear localStorage
    localStorage.clear()
  })

  it('renders correctly expecting EN text when pt', () => {
    const wrapper = mount(LangToggle, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toContain('EN')
  })

  it('toggles language and updates localStorage to en', async () => {
    const wrapper = mount(LangToggle, {
      global: {
        plugins: [i18n],
      },
    })

    await wrapper.trigger('click')

    expect(i18n.global.locale.value).toBe('en')
    expect(localStorage.getItem('preferredLang')).toBe('en')
    expect(wrapper.text()).toContain('PT')
  })

  it('toggles back to pt when localized to en', async () => {
    i18n.global.locale.value = 'en'

    const wrapper = mount(LangToggle, {
      global: {
        plugins: [i18n],
      },
    })

    await wrapper.trigger('click')

    expect(i18n.global.locale.value).toBe('pt')
    expect(localStorage.getItem('preferredLang')).toBe('pt')
    expect(wrapper.text()).toContain('EN')
  })
})
