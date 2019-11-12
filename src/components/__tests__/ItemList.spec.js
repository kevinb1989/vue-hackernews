import {shallowMount} from '@vue/test-utils'
import ItemList from '../../views/ItemList.vue'
import Item from '../Item.vue'

describe('ItemList.vue', () => {
	test('render an Item for each item in window.items', () => {
		window.items = [{}, {}, {}]
		const wrapper = shallowMount(ItemList)
		const items = wrapper.findAll(Item)

		expect(wrapper.findAll(Item)).toHaveLength(window.items.length)
		items.wrappers.forEach((wrapper, i) => {
			expect(wrapper.props().item).toBe(window.items[i])
		})
	})
})