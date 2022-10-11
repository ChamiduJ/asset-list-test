import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AssetList from '../../AssetList/AssetList.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(AssetList);
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
