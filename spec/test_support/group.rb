module Page
  class Group
    include Capybara::DSL

    def initialize
      url = '/'
      visit(url)
      validate!
    end

    def fill_form
      sleep(0.5)
      page.execute_script("document.getElementById('group').textContent='Dishes'");
    end

    def save
      find('#submit').click
    end

    def has_success_submit?
      has_content?('Dishes')
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
