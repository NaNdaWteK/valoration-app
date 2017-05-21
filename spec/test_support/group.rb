module Page
  class Group
    include Capybara::DSL

    def initialize
      url = '/'
      visit(url)
      validate!
    end

    def has_button_list?
      has_css?('#groupsList')
    end

    def go_to_form
      find('.bar-button-menutoggle').click
      sleep 1
      find('#groupForm').click
    end

    private
    def validate!
      assert_selector('.bar-button-menutoggle')
    end
  end
end
