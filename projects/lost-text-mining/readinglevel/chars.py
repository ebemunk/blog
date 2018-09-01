from textstat.textstat import textstat

import psycopg2

import db

def main():
    conn = psycopg2.connect(**db.config())
    read = conn.cursor()
    read.execute('select * from all_lines_by_char where char_name in (select char_name from total_lines_by_char limit 25)')
    row = read.fetchone()

    while row is not None:
        text = row[1]
        text_standard = textstat.text_standard(text, True)
        print(row[0], text_standard)
        row = read.fetchone()

main()
