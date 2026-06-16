const BlockCoinConfig = {
    // ==========================================
    // WEBSITE CONTENT (TEXT & CODE)
    // ==========================================
    "overview_text": "Welcome to the official documentation for the BlockCoin currency system for Scratch. This system uses Scratchattach to connect shops and games to a centralized server and then uses a captcha to verify transactions safely and easily.",
    "editor_url": "https://scratch.mit.edu/projects/1331635541/editor/",
    "credit_username": "@timmccool",
    "paycoins_block_text": "define PayCoins (Amount)\nSend Request | request name: [get_captcha] argument1: (username) and wait\nask [response] and wait\nSend request | request name: [get_owner] and wait\nask (join [Do you authorize a transaction of ] (join (Amount) (join [ to ] (join (response) [ (y/n)])))) and wait\nif <(answer) = [y]> then\n  Send request | request name: [transaction] argument1: (Amount) argument2: (username) and wait\nend",
    "captcha_block_text": "when this sprite clicked\nask [Enter your Scratch username:] and wait\nset [username v] to (answer)\nset [server_response v] to (brackets [get_captcha] (username) :: extension)\nif <(server_response) contains [|]> then\n  set [idx v] to [1]\n  set [rule_text v] to []\n  repeat until <(letter (idx) of (server_response)) = [|]>\n    set [rule_text v] to (join (rule_text) (letter (idx) of (server_response)))\n    change [idx v] by (1)\n  end\n  change [idx v] by (1)\n  set [verification_code v] to []\n  repeat until <(idx) > (length of (server_response))>\n    set [verification_code v] to (join (verification_code) (letter (idx) of (server_response)))\n    change [idx v] by (1)\n  end\n  say (rule_text) for (5) secs\n  say (join [Your code is: ] (verification_code))\nelse\n  say [Server error. Please try again.] for (3) secs\nend",

    // ==========================================
    // WEBSITE STYLING (COLORS, FONTS & LAYOUT)
    // ==========================================
    "body_background_color": "#ffffff",
    "body_text_color": "#212529",
    "body_font_family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    "body_padding": "40px 20px",
    "container_max_width": "800px",

    // Headings
    "h1_font_size": "32px",
    "h1_color": "#111111",
    "h2_font_size": "22px",
    "h2_color": "#222222",
    "h2_border_color": "#e9ecef",

    // Command Matrix Table
    "table_header_bg": "#f8f9fa",
    "table_header_color": "#333333",
    "table_border_color": "#e9ecef",
    "table_text_color": "#4a5568",

    // Scratch Text Blocks Code Window
    "code_window_bg": "#1e1e24",
    "code_window_text_color": "#f8f9fa",
    "code_window_border_radius": "8px",
    "code_window_padding": "20px",
    "code_font_size": "14px",
    
    // Tiny inline highlights (e.g. @timmccool box)
    "inline_code_bg": "#f1f3f5",
    "inline_code_color": "#d63384"
};
