const BlockCoinConfig = {
    // ==========================================
    // WEBSITE CONTENT (TEXT & TITLES)
    // ==========================================
    "main_title": "BlockCoin Documentation",
    "overview_text": "Welcome to the official documentation for the BlockCoin currency system for Scratch. This system uses Scratchattach to connect shops and games to a centralized server and then uses a captcha to verify transactions safely and easily.",
    
    // Setup Section Strings
    "setup_title": "How to Add BlockCoin to Your Game",
    "setup_step_1": "Open the official project editor at ",
    "editor_url": "https://scratch.mit.edu/projects/1331635541/editor/",
    "setup_step_2": "Open your Backpack at the bottom of the screen. Add the sprite named \"Cloud Requests\" into your backpack, then open your own project and add it.",
    "setup_step_3_prefix": "Important: You must give credit to ",
    "credit_username": "@timmccool",
    "setup_step_3_suffix": " in your project's Notes and Credits for the cloud request system!",

    // Reference Table Strings
    "table_title": "Scratch Command Reference",
    "table_description": "These are the core commands you can run using the blocks inside the Cloud Requests sprite:",
    "th_command": "Command Name",
    "th_argument": "What to Put in Argument 1",
    "th_action": "What It Does",

    // Code Blocks Section Strings
    "layouts_title": "Official Script Layouts",
    "layouts_description": "Recreate these exact blocks inside your project to make payments work seamlessly.",
    "code_1_title": "1. The Custom Payment Block (PayCoins Definition)",
    "code_2_title": "2. Generating and Displaying the Captcha Code",

    // Raw Code Layout Logic Text
    "paycoins_block_text": "define PayCoins (Amount)\nSend Request | request name: [get_captcha] argument1: (username) and wait\nask [response] and wait\nSend request | request name: [get_owner] and wait\nask (join [Do you authorize a transaction of ] (join (Amount) (join [ to ] (join (response) [ (y/n)])))) and wait\nif <(answer) = [y]> then\n  Send request | request name: [transaction] argument1: (Amount) argument2: (username) and wait\nend",
    "captcha_block_text": "when this sprite clicked\nask [Enter your Scratch username:] and wait\nset [username v] to (answer)\nset [server_response v] to (brackets [get_captcha] (username) :: extension)\nif <(server_response) contains [|]> then\n  set [idx v] to [1]\n  set [rule_text v] to []\n  repeat until <(letter (idx) of (server_response)) = [|]>\n    set [rule_text v] to (join (rule_text) (letter (idx) of (server_response)))\n    change [idx v] by (1)\n  end\n  change [idx v] by (1)\n  set [verification_code v] to []\n  repeat until <(idx) > (length of (server_response))>\n    set [verification_code v] to (join (verification_code) (letter (idx) of (server_response)))\n    change [idx v] by (1)\n  end\n  say (rule_text) for (5) secs\n  say (join [Your code is: ] (verification_code))\nelse\n  say [Server error. Please try again.] for (3) secs\nend",

    // ==========================================
    // WEBSITE STYLING (COLORS & FONTS)
    // ==========================================
    "body_background_color": "#ffffff",
    "body_text_color": "#2c3e50",
    "body_font_family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    "body_padding": "50px 25px",
    "container_max_width": "800px",

    // Headings
    "h1_font_size": "36px",
    "h1_color": "#1a1a1a",
    "h2_font_size": "24px",
    "h2_color": "#2c3e50",
    "h2_border_color": "#e2e8f0",

    // Link Text Styling
    "link_color": "#3182ce",

    // Reference Table Styling
    "table_header_bg": "#f7fafc",
    "table_header_color": "#4a5568",
    "table_border_color": "#edf2f7",
    "table_text_color": "#4a5568",

    // Script Display Text Boxes
    "code_window_bg": "#1a202c",
    "code_window_text_color": "#f7fafc",
    "code_window_border_radius": "8px",
    "code_window_padding": "20px",
    "code_font_size": "14px",
    
    // Inline highlight elements
    "inline_code_bg": "#edf2f7",
    "inline_code_color": "#e53e3e"
};
