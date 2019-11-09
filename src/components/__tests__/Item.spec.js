import {shallowMount} from '@vue/test-utils'
import Item from '../Item.vue'
import Vue from 'vue'

describe('Item.vue', () => {
	test('sanity test', () => {
		console.log(Item)
	})

	test('render "item"', () => {
		const wrapper = shallowMount(Item)
		debugger
		expect(wrapper.vm.$el.textContent).toContain('item')
	})
})
