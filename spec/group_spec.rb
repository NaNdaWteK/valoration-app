require 'spec_helper'
require 'test_support/group'

feature 'Group Service' do
  scenario 'goes to form' do
    page = Page::Group.new
    page.go_to_form
    expect(page.has_button_list?).to be true
  end
  scenario 'added new group' do
    page = Page::Group.new
    page.go_to_form
    page.fill_form
    page.save
    expect(page.has_success_submit?).to be true
  end
end
