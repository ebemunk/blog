from textstat.textstat import textstat

import psycopg2

import db

def main():
    conn = psycopg2.connect(**db.config())
    read = conn.cursor()
    read.execute('select season, episode, string_agg(text, \' \') from scene_text group by season, episode order by season, episode')
    row = read.fetchone()

    while row is not None:
        text = row[2]
        text_standard = textstat.text_standard(text, True)
        print(row[0], row[1], text_standard)
        row = read.fetchone()

main()
