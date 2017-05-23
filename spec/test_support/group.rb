module Page
  class Group
    include Capybara::DSL

    def initialize
      url = '/'
      visit(url)
      validate!
    end

    def fill(content)
      fill_in('group', with: content)
    end

    def save
      find('#submit').click
    end

    def check?
      has_content?('Dishes')
    end

    def list?
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
