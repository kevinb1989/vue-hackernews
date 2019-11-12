import {shallowMount} from '@vue/test-utils'
import Item from '../Item.vue'
import Vue from 'vue'

describe('Item.vue', () => {
	test('renders a link to the item.url with item.title as text', () => {
		const item = {
			title: 'some title',
			url: 'http://some-url.com'
		}

		const wrapper = shallowMount(Item, {
			propsData: {item}
		})
		const a = wrapper.find('a')

		expect(a.text()).toBe(item.title)
		expect(a.attributes().href).toBe(item.url)
	})
})
