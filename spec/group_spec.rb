require 'spec_helper'
require 'test_support/group'

feature 'Group Service' do
  scenario 'go to form' do
    page = Page::Group.new
    page.go_to_form
    expect(page.has_button_list?).to be true
  end
end
