require 'spec_helper'
require 'test_support/group'

feature 'Group Service' do
  scenario 'goes to form' do
    group = Page::Group.new
    group.go_to_form
    expect(group.list?).to be true
  end
  scenario 'added new group' do
    group = Page::Group.new
    group.go_to_form
    group.fill('Dishes')
    group.save
    expect(group.check?).to be true
  end
end
